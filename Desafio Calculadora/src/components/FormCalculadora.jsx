import { useState } from 'react'
import styles from './FormCalculadora.module.css'

function FormCalculadora() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operacao, setOperacao] = useState('+')
  const [resultado, setResultado] = useState('')

  function limpar() {
    setNum1('')
    setNum2('')
    setOperacao('+')
    setResultado('')
  }

  function calcular(e) {
    e.preventDefault()

    if (num1 === '' || num2 === '') {
      alert('Preencha todos os campos!')
      return
    }

    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    let res = 0

    switch (operacao) {
      case '+':
        res = n1 + n2
        break
      case '-':
        res = n1 - n2
        break
      case '*':
        res = n1 * n2
        break
      case '/':
        if (n2 === 0) {
          setResultado('Erro: Divisão por zero!')
          return
        }
        res = n1 / n2
        break
      default:
        res = 0
    }

    setResultado(`Resultado: ${res}`)
  }

  return (
    <div>
      <form onSubmit={calcular} className={styles.formContainer}>
        <h2>Calculadora Simples</h2>

        <div className={styles.inputGroup}>
          <input
            type="number"
            step="any"
            placeholder="Informe o primeiro número..."
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <select
            value={operacao}
            onChange={(e) => setOperacao(e.target.value)}
          >
            <option value="+">Somar (+)</option>
            <option value="-">Subtrair (-)</option>
            <option value="*">Multiplicar (*)</option>
            <option value="/">Dividir (/)</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="number"
            step="any"
            placeholder="Informe o segundo número..."
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <div className={styles.btn}>
          <input type="submit" value="Calcular" />
          <input type="button" value="Limpar" onClick={limpar} />
        </div>

        <div className={styles.resultado}>
          <p>{resultado}</p>
        </div>
      </form>
    </div>
  )
}

export default FormCalculadora