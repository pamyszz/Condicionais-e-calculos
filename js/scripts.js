// Função para abrir o formulário do exercício
function abrirFormulario(id) {
    // Esconde todos os formulários
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Mostra o formulário do exercício selecionado
    const formToShow = document.getElementById(`${id}_form`);
    formToShow.style.display = 'block';

    // Limpa o resultado anterior
    const resultados = document.querySelectorAll('.resultado');
    resultados.forEach(resultado => {
        resultado.innerHTML = '';
    });
}

// Exercício 1: Calcular Calorias
function calcularCalorias() {
    const prato = parseInt(document.getElementById('prato').value);
    const sobremesa = parseInt(document.getElementById('sobremesa').value);
    const bebida = parseInt(document.getElementById('bebida').value);

    const totalCalorias = prato + sobremesa + bebida;

    const resultado = document.getElementById('ex1_resultado');
    resultado.innerHTML = `Total de Calorias: <strong>${totalCalorias}</strong>`;
}

// Exercício 2: Verificar Divisibilidade
function verificarDivisibilidade() {
    const numero = parseInt(document.getElementById('numero').value);

    let divisivelPor3 = numero % 3 === 0;
    let divisivelPor7 = numero % 7 === 0;

    const resultado = document.getElementById('ex2_resultado');
    if (divisivelPor3 && divisivelPor7) {
        resultado.innerHTML = `${numero} é divisível por 3 e por 7!`;
    } else if (divisivelPor3) {
        resultado.innerHTML = `${numero} é divisível por 3, mas não por 7.`;
    } else if (divisivelPor7) {
        resultado.innerHTML = `${numero} é divisível por 7, mas não por 3.`;
    } else {
        resultado.innerHTML = `${numero} não é divisível por 3 nem por 7.`;
    }
}

// Exercício 3: Calcular Crédito
function calcularCredito() {
    const idade = parseInt(document.getElementById('idade').value);

    let credito = 0;

    if (idade >= 18 && idade <= 25) {
        credito = 1000;
    } else if (idade >= 26 && idade <= 35) {
        credito = 1500;
    } else if (idade >= 36 && idade <= 50) {
        credito = 2000;
    } else {
        credito = 500;
    }

    const resultado = document.getElementById('ex3_resultado');
    resultado.innerHTML = `O valor de crédito para uma pessoa com ${idade} anos é <strong>R$ ${credito}</strong>.`;
}

// Exercício 4: Ordenar em Ordem Decrescente
function ordenarDecrescente() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const numero3 = parseInt(document.getElementById('numero3').value);

    const numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => b - a);

    const resultado = document.getElementById('ex4_resultado');
    resultado.innerHTML = `Números em ordem decrescente: <strong>${numerosOrdenados.join(', ')}</strong>`;
}

// Exercício 5: Determinar Classe Eleitoral
function determinarClasseEleitoral() {
    const idadeEleitor = parseInt(document.getElementById('idadeEleitor').value);

    let classeEleitoral = '';

    if (idadeEleitor < 16) {
        classeEleitoral = 'não eleitor';
    } else if (idadeEleitor >= 16 && idadeEleitor < 18) {
        classeEleitoral = 'eleitor facultativo';
    } else if (idadeEleitor >= 18 && idadeEleitor <= 65) {
        classeEleitoral = 'eleitor obrigatório';
    } else {
        classeEleitoral = 'eleitor facultativo';
    }

    const resultado = document.getElementById('ex5_resultado');
    resultado.innerHTML = `Para uma pessoa com ${idadeEleitor} anos, a classe eleitoral é <strong>${classeEleitoral}</strong>.`;
}

// Exercício 6: Antecessor, Número, Sucessor
function antecessorNumeroSucessor() {
    const numeroCentral = parseInt(document.getElementById('numeroCentral').value);

    const antecessor = numeroCentral - 1;
    const sucessor = numeroCentral + 1;

    const resultado = document.getElementById('ex6_resultado');
    resultado.innerHTML = `Antecessor: <strong>${antecessor}</strong>, Número: <strong>${numeroCentral}</strong>, Sucessor: <strong>${sucessor}</strong>`;
}

// Exercício 7: Médias e Soma de Médias
function calcularMedias() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const mediaSimples = (nota1 + nota2 + nota3) / 3;
    const mediaPonderada = (nota1 * 3 + nota2 * 4 + nota3 * 3) / 10;
    const somaMedias = mediaSimples + mediaPonderada;

    const resultado = document.getElementById('ex7_resultado');
    resultado.innerHTML = `Média Simples: <strong>${mediaSimples.toFixed(2)}</strong>, Média Ponderada: <strong>${mediaPonderada.toFixed(2)}</strong>, Soma das Médias: <strong>${somaMedias.toFixed(2)}</strong>`;
}

// Exercício 8: Valor Total com IPI
function calcularValorTotalIPI() {
    const valorProduto = parseFloat(document.getElementById('valorProduto').value);

    const valorIPI = valorProduto * 0.05;
    const valorTotal = valorProduto + valorIPI;

    const resultado = document.getElementById('ex8_resultado');
    resultado.innerHTML = `Valor do IPI: <strong>R$ ${valorIPI.toFixed(2)}</strong>, Valor Total: <strong>R$ ${valorTotal.toFixed(2)}</strong>`;
}

// Exercício 9: Salários Mínimos
function calcularSalariosMinimos() {
    const salario = parseFloat(document.getElementById('salario').value);

    const salarioMinimo = 1100; // Valor do salário mínimo
    const qtdSalariosMinimos = salario / salarioMinimo;

    const resultado = document.getElementById('ex9_resultado');
    resultado.innerHTML = `O salário informado equivale a <strong>${qtdSalariosMinimos.toFixed(2)}</strong> salários mínimos.`;
}

// Exercício 10: Saldo com Reajuste
function calcularSaldoReajuste() {
    const saldo = parseFloat(document.getElementById('saldo').value);
    const percentual = parseFloat(document.getElementById('percentual').value);

    const novoSaldo = saldo + (saldo * (percentual / 100));

    const resultado = document.getElementById('ex10_resultado');
    resultado.innerHTML = `Novo saldo com reajuste: <strong>R$ ${novoSaldo.toFixed(2)}</strong>`;
}

// Exercício 11: Salário Final do Vendedor
function calcularSalarioVendedor() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value);
    const totalVendas = parseFloat(document.getElementById('totalVendas').value);

    const comissao = totalVendas * 0.05;
    const salarioFinal = salarioBase + comissao;

    const resultado = document.getElementById('ex11_resultado');
    resultado.innerHTML = `Salário final do vendedor: <strong>R$ ${salarioFinal.toFixed(2)}</strong>`;
}

// Exercício 12: Soma dos Números de 1 a 15
function calcularSoma1a15() {
    let soma = 0;
    for (let i = 1; i <= 15; i++) {
      soma += i;
    }
  
    const resultado = document.getElementById('ex12_resultado');
    resultado.innerHTML = `A soma dos números de 1 a 15 é <strong>${soma}</strong>`;
  }

// Exercício 13: Converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
  
    const fahrenheit = (celsius * 9/5) + 32;
  
    const resultado = document.getElementById('ex13_resultado');
    resultado.innerHTML = `${celsius}° Celsius equivalem a <strong>${fahrenheit.toFixed(2)}° Fahrenheit</strong>`;
  }

// Exercício 14: Soma de 10 Números
function calcularSoma10Numeros() {
    const numerosString = document.getElementById('numerosEx14').value;
    const numeros = numerosString.split(',').map(num => parseInt(num.trim()));
  
    if (numeros.length !== 10) {
      const resultado = document.getElementById('ex14_resultado');
      resultado.innerHTML = `Por favor, digite 10 números separados por vírgula.`;
      return;
    }
  
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
  
    const resultado = document.getElementById('ex14_resultado');
    resultado.innerHTML = `A soma dos números é <strong>${soma}</strong>`;
  }
  
// Exercício 15: Soma das Idades de 20 Pessoas
function calcularSomaIdades() {
    const idadesString = document.getElementById('idadesEx15').value; // Corrigido para 'idadesEx15'

    const idades = idadesString.split(',').map(idade => parseInt(idade.trim()));

    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    const resultado = document.getElementById('ex15_resultado');
    resultado.innerHTML = `A soma das idades é <strong>${soma}</strong>`;
}

// Exercício 16: Média das Idades de 20 Pessoas
function calcularMediaIdades() {
    const idadesString = document.getElementById('idadesEx16').value; // Corrigido para 'idadesEx16'

    const idades = idadesString.split(',').map(idade => parseInt(idade.trim()));

    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    const media = soma / idades.length;

    const resultado = document.getElementById('ex16_resultado');
    resultado.innerHTML = `A média das idades é <strong>${media.toFixed(2)}</strong>`;
}

// Exercício 17: Número de Pessoas Maiores de Idade
function contarPessoasMaioresIdade() {
    const idadesString = document.getElementById('idadePessoas').value;
    const idades = idadesString.split(',').map(idade => parseInt(idade.trim()));

    let count = 0;
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            count++;
        }
    }

    const resultado = document.getElementById('ex17_resultado');
    resultado.innerHTML = `Há <strong>${count}</strong> pessoa(s) maior(es) de idade.`;
}

// Exercício 18: Nome da Pessoa Mais Nova
function nomePessoaMaisNova() {
    const nomesIdadesString = document.getElementById('nomesIdades').value;
    const nomesIdades = nomesIdadesString.split(',').map(item => {
        const [nome, idade] = item.trim().split(' ');
        return { nome, idade: parseInt(idade) };
    });

    let pessoaMaisNova = nomesIdades[0];
    for (let i = 1; i < nomesIdades.length; i++) {
        if (nomesIdades[i].idade < pessoaMaisNova.idade) {
            pessoaMaisNova = nomesIdades[i];
        }
    }

    const resultado = document.getElementById('ex18_resultado');
    resultado.innerHTML = `A pessoa mais nova é <strong>${pessoaMaisNova.nome}</strong> com ${pessoaMaisNova.idade} anos.`;
}

// Exercício 19: Conversão de Dólar para Real
function converterDolarParaReal() {
    const valorDolar = parseFloat(document.getElementById('valorDolar').value);
    const cotacaoDolar = 5.3; // Considerando uma cotação fixa para o exemplo

    const valorReal = valorDolar * cotacaoDolar;

    const resultado = document.getElementById('ex19_resultado');
    resultado.innerHTML = `O valor em reais é <strong>R$ ${valorReal.toFixed(2)}</strong>`;
}

// Exercício 20: Números Maiores que 8
function encontrarMaioresQue8() {
    const numerosString = document.getElementById('numerosEx20').value;
    const numeros = numerosString.split(',').map(num => parseInt(num.trim()));

    const maioresQue8 = numeros.filter(num => num > 8);

    const resultado = document.getElementById('ex20_resultado');
    resultado.innerHTML = `Números maiores que 8: <strong>${maioresQue8.join(', ')}</strong>`;
}

// Exercício 21: Valor das Prestações
function calcularValorPrestacoes() {
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);

    const valorPrestacao = valorCompra / parcelas;

    const resultado = document.getElementById('ex21_resultado');
    resultado.innerHTML = `Valor de cada prestação: <strong>R$ ${valorPrestacao.toFixed(2)}</strong>`;
}

// Exercício 22: Números entre 0 e 100
function exibirNumeros0a100() {
    let numeros = '';
    for (let i = 0; i <= 100; i++) {
        numeros += i + ', ';
    }

    const resultado = document.getElementById('ex22_resultado');
    resultado.innerHTML = `Números entre 0 e 100: <strong>${numeros}</strong>`;
}

// Exercício 23: Classificar Números em Faixas
function classificarNumerosFaixas() {
    const numerosString = document.getElementById('numerosFaixas').value;
    const numeros = numerosString.split(',').map(num => parseInt(num.trim()));

    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 0 && numeros[i] <= 25) {
            faixa1++;
        } else if (numeros[i] >= 26 && numeros[i] <= 50) {
            faixa2++;
        } else if (numeros[i] > 50) {
            faixa3++;
        }
    }

    const resultado = document.getElementById('ex23_resultado');
    resultado.innerHTML = `Quantidade de números na faixa [0-25]: <strong>${faixa1}</strong>, [26-50]: <strong>${faixa2}</strong>, [>50]: <strong>${faixa3}</strong>`;
}

// Exercício 24: Soma de Números (negativo para encerrar)
function somaNumerosNegativo() {
    const numerosString = document.getElementById('numerosSomaNeg').value;
    const numeros = numerosString.split(',').map(num => parseInt(num.trim()));

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            break;
        }
        soma += numeros[i];
    }

    const resultado = document.getElementById('ex24_resultado');
    resultado.innerHTML = `A soma dos números é <strong>${soma}</strong>`;
}

// Exercício 25: Soma de Números Positivos
function somaNumerosPositivos() {
    const numerosString = document.getElementById('numerosSomaPos').value;
    const numeros = numerosString.split(',').map(num => parseInt(num.trim()));

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            continue;
        }
        soma += numeros[i];
    }

    const resultado = document.getElementById('ex25_resultado');
    resultado.innerHTML = `A soma dos números positivos é <strong>${soma}</strong>`;
}
