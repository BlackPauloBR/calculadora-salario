import React, { Component } from 'react';
import { calculateSalaryFrom } from './helpers/salary.js';
import Input from './components/input/Input.js';
import css from './components/components.module.css';
import ShowBar from './components/bars/ShowBar.js';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      info: {
        baseINSS: '',
        discountINSS: '',
        baseIRPF: '',
        discountIRPF: '',
        netSalary: '',
        porDisINSS: '',
        porDisIRPF: '',
        porNetSalary: '',
      },
    };
  }

  calcSalary = (event) => {
    const salary = event.target.value;

    let infoSalary = calculateSalaryFrom(salary);
    infoSalary.netSalary = infoSalary.netSalary.toFixed(2);
    if (infoSalary) {
      this.setState({
        info: infoSalary,
      });
    }
  };

  calcPorcentagem = (value) => {
    if (value) {
      const { baseINSS } = this.state.info;
      const newValue = ((value / baseINSS) * 100).toFixed(2);
      return newValue;
    } else {
      return '';
    }
  };

  formatValueShow = (value, porcentagem, bolean) => {
    const newValue = this.formatNumber(value);
    if (bolean > 0) {
      return `R$ ${newValue}`;
    } else if (!isNaN(porcentagem) && porcentagem) {
      const stringShow = `R$ ${newValue} (${porcentagem}%)`;

      return stringShow;
    } else {
      return '';
    }
  };

  formatNumber = (number) => {
    const numberFormat = Intl.NumberFormat('pt-BR');
    const newNumber = numberFormat.format(number);

    return newNumber;
  };

  render() {
    let {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      porDisINSS,
      porDisIRPF,
      porNetSalary,
    } = this.state.info;
    porDisINSS = this.calcPorcentagem(discountINSS);
    const showDisINSS = this.formatValueShow(discountINSS, porDisINSS);

    porDisIRPF = this.calcPorcentagem(discountIRPF);
    const showDisIRPF = this.formatValueShow(discountIRPF, porDisIRPF);

    porNetSalary = this.calcPorcentagem(netSalary);
    const showNetSalary = this.formatValueShow(netSalary, porNetSalary);

    const showBaseIRPF = this.formatValueShow(baseIRPF, porDisIRPF, baseIRPF);
    const showBaseINSS = this.formatValueShow(baseINSS, porDisINSS, baseINSS);

    const newInfo = Object.assign(
      {},
      {
        baseINSS,
        discountINSS,
        baseIRPF,
        discountIRPF,
        netSalary,
        porDisINSS,
        porDisIRPF,
        porNetSalary,
      }
    );
    return (
      <div className={css.app}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyItems: 'left',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h2 className={css.tituloBack}>
            <strong className={css.titulo}>Calculadora Salário Líquido</strong>
            <h5>(vesão sem dependentes, atualização em breve)</h5>
          </h2>
          <input
            style={{ width: 300, fontWeight: 'bold' }}
            type="number"
            onChange={this.calcSalary}
            min="0"
            step="250"
          />
          <div className={css.infoGlobal}>
            <Input
              placeHolder={showBaseINSS}
              inDisabled={true}
              inText={'Base INSS: '}
              inClasse={'baseSalary'}
            ></Input>
            <Input
              placeHolder={showDisINSS}
              inDisabled={true}
              inText={'Desconto INSS: '}
              inClasse={'color1'}
              inColor={'#e67e22'}
            ></Input>
            <Input
              placeHolder={showBaseIRPF}
              inDisabled={true}
              inText={'Base IRPF: '}
              inClasse={'baseSalary'}
            ></Input>
            <Input
              placeHolder={showDisIRPF}
              inDisabled={true}
              inText={'Desconto IRPF: '}
              inClasse={'color2'}
              inColor={'#c0392b'}
            ></Input>
            <Input
              placeHolder={showNetSalary}
              inDisabled={true}
              inText={'Salário Liquido: '}
              inClasse={'color3'}
              inColor={'#16a085'}
            ></Input>
          </div>
        </div>
        <ShowBar inInfo={newInfo}></ShowBar>
      </div>
    );
  }
}
