import readlineSync from "readline-sync"

function limparTela(): void {
    console.clear()
}

function pausar(): void {
    readlineSync.question("\nPressione ENTER para continuar...")
}

function executarExercicio(caminho: string): void {

    try {

        limparTela()

        delete require.cache[require.resolve(caminho)]

        require(caminho)

    } catch (erro) {

        console.log("\nErro ao executar exercício.")
        console.error(erro)

    }

    pausar()
}

function menu(): void {

    while (true) {

        limparTela()

        console.log("======== ATIVIDADES POO ========\n")

        console.log("======= 1º BIMESTRE =======\n")

        console.log("----- ATIVIDADE 1 -----")
        console.log("1  - index.ts")

        console.log("\n----- ATIVIDADE 2 -----")
        console.log("\nPARTE 1")
        console.log("2  - 1_index.ts")
        console.log("3  - 2_identificadores.ts")
        console.log("4  - 3_varLetConst.ts")
        console.log("5  - 4_saidaFormatadaTerminal.ts")

        console.log("\nPARTE 2")
        console.log("6  - 5_tipos.ts")
        console.log("7  - 6_inferencia.ts")
        console.log("8  - 7_funcoesTipadas.ts")
        console.log("9  - 8_void.ts")
        console.log("10 - 9_ehPar.ts")
        console.log("11 - 10_interfaceType.ts")

        console.log("\nPARTE 3")
        console.log("12 - 11_leituraSimples.ts")
        console.log("13 - 12_conversao.ts")
        console.log("14 - 13_campoObrigatorio.ts")
        console.log("15 - 14_validacaoInteiro.ts")
        console.log("16 - 15_validacaoFaixa.ts")
        console.log("17 - 16_cadastro.ts")

        console.log("\nPARTE 4")
        console.log("18 - 17_classePessoa.ts")
        console.log("19 - 18_classeProduto.ts")
        console.log("20 - 19_classeRetangulo.ts")
        console.log("21 - 20_classeContaCorrente.ts")
        console.log("22 - 21_modificadores.ts")
        console.log("23 - 22_getterSetter.ts")
        console.log("24 - 23_this.ts")

        console.log("\nPARTE 5")
        console.log("25 - 24_calculadora.ts")
        console.log("26 - 25_lampada.ts")
        console.log("27 - 26_usuario.ts")
        console.log("28 - 27_sobrecarga.ts")

        console.log("\n======= 2º BIMESTRE =======\n")

        console.log("----- ATIVIDADE 1 -----")
        console.log("29 - exercicio-star-wars.ts")

        console.log("\n----- ATIVIDADE 2 -----")
        console.log("30 - ex01.ts")
        console.log("31 - ex02.ts")
        console.log("32 - ex03.ts")
        console.log("33 - ex04.ts")
        console.log("34 - ex05.ts")
        console.log("35 - ex06.ts")
        console.log("36 - ex07.ts")
        console.log("37 - ex08.ts")
        console.log("38 - ex09.ts")

        console.log("\n0 - Sair\n")

        const opcao = readlineSync.question("Escolha uma opcao: ")

        switch(opcao) {

            // BIM01 - ATIVIDADE 1

            case "1":
                executarExercicio("./bim01/atv01/index")
                break

            // BIM01 - ATIVIDADE 2 - PARTE 1

            case "2":
                executarExercicio("./bim01/atv02/parte_1/1_index")
                break

            case "3":
                executarExercicio("./bim01/atv02/parte_1/2_identificadores")
                break

            case "4":
                executarExercicio("./bim01/atv02/parte_1/3_varLetConst")
                break

            case "5":
                executarExercicio("./bim01/atv02/parte_1/4_saidaFormatadaTerminal")
                break

            // BIM01 - ATIVIDADE 2 - PARTE 2

            case "6":
                executarExercicio("./bim01/atv02/parte_2/5_tipos")
                break

            case "7":
                executarExercicio("./bim01/atv02/parte_2/6_inferencia")
                break

            case "8":
                executarExercicio("./bim01/atv02/parte_2/7_funcoesTipadas")
                break

            case "9":
                executarExercicio("./bim01/atv02/parte_2/8_void")
                break

            case "10":
                executarExercicio("./bim01/atv02/parte_2/9_ehPar")
                break

            case "11":
                executarExercicio("./bim01/atv02/parte_2/10_interfaceType")
                break

            // BIM01 - ATIVIDADE 2 - PARTE 3

            case "12":
                executarExercicio("./bim01/atv02/parte_3/11_leituraSimples")
                break

            case "13":
                executarExercicio("./bim01/atv02/parte_3/12_conversao")
                break

            case "14":
                executarExercicio("./bim01/atv02/parte_3/13_campoObrigatorio")
                break

            case "15":
                executarExercicio("./bim01/atv02/parte_3/14_validacaoInteiro")
                break

            case "16":
                executarExercicio("./bim01/atv02/parte_3/15_validacaoFaixa")
                break

            case "17":
                executarExercicio("./bim01/atv02/parte_3/16_cadastro")
                break

            // BIM01 - ATIVIDADE 2 - PARTE 4

            case "18":
                executarExercicio("./bim01/atv02/parte_4/17_classePessoa")
                break

            case "19":
                executarExercicio("./bim01/atv02/parte_4/18_classeProduto")
                break

            case "20":
                executarExercicio("./bim01/atv02/parte_4/19_classeRetangulo")
                break

            case "21":
                executarExercicio("./bim01/atv02/parte_4/20_classeContaCorrente")
                break

            case "22":
                executarExercicio("./bim01/atv02/parte_4/21_modificadores")
                break

            case "23":
                executarExercicio("./bim01/atv02/parte_4/22_getterSetter")
                break

            case "24":
                executarExercicio("./bim01/atv02/parte_4/23_this")
                break

            // BIM01 - ATIVIDADE 2 - PARTE 5

            case "25":
                executarExercicio("./bim01/atv02/parte_5/24_calculadora")
                break

            case "26":
                executarExercicio("./bim01/atv02/parte_5/25_lampada")
                break

            case "27":
                executarExercicio("./bim01/atv02/parte_5/26_usuario")
                break

            case "28":
                executarExercicio("./bim01/atv02/parte_5/27_sobrecarga")
                break

            // BIM02 - ATIVIDADE 1

            case "29":
                executarExercicio("./bim02/atv01/exercicio-star-wars")
                break

            // BIM02 - ATIVIDADE 2

            case "30":
                executarExercicio("./bim02/atv02/ex01")
                break

            case "31":
                executarExercicio("./bim02/atv02/ex02")
                break

            case "32":
                executarExercicio("./bim02/atv02/ex03")
                break

            case "33":
                executarExercicio("./bim02/atv02/ex04")
                break

            case "34":
                executarExercicio("./bim02/atv02/ex05")
                break

            case "35":
                executarExercicio("./bim02/atv02/ex06")
                break

            case "36":
                executarExercicio("./bim02/atv02/ex07")
                break

            case "37":
                executarExercicio("./bim02/atv02/ex08")
                break

            case "38":
                executarExercicio("./bim02/atv02/ex09")
                break

            case "0":
                console.log("\nEncerrando...")
                process.exit(0)

            default:
                console.log("\nOpcao invalida.")
                pausar()
        }
    }
}

menu()

export {}
