import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
 mes: string;
 luas: Array<object>;

  constructor() {
    // Date é uma classe que representa uma data
    // Date.getMonth() pega o índice do mês, começando do 0
    //
    // 0 => janeiro
    // 1 => fevereiro
    // ...

    let hoje = new Date();

    let meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    this.mes = meses[hoje.getMonth()];
    this.luas = this.calendarioLunar()[hoje.getMonth()];
  }


  ngOnInit() {
  }

  calendarioLunar() {
    let janeiro = [
      {
        lua: "nova",
        dia: 6
      },
      {
        lua: "crescente",
        dia: 14
      },
      {
        lua: "cheia",
        dia: 21
      },
      {
        lua: "minguante",
        dia: 27
      },
    ];

    let fevereiro = [
      {
        lua: "nova",
        dia: 4
      },
      {
        lua: "crescente",
        dia: 12
      },
      {
        lua: "cheia",
        dia: 19
      },
      {
        lua: "minguante",
        dia: 26
      },
    ];

    let março = [
      {
        lua: "nova",
        dia: 6
      },
      {
        lua: "crescente",
        dia: 14
      },
      {
        lua: "cheia",
        dia: 21
      },
      {
        lua: "minguante",
        dia: 28
      },
    ];

    let abril = [
      {
        lua: "nova",
        dia: 5
      },
      {
        lua: "crescente",
        dia: 12
      },
      {
        lua: "cheia",
        dia: 19
      },
      {
        lua: "minguante",
        dia: 26
      },
    ];

    let maio = [
      {
        lua: "nova",
        dia: 4
      },
      {
        lua: "crescente",
        dia: 12
      },
      {
        lua: "cheia",
        dia: 18
      },
      {
        lua: "minguante",
        dia: 26
      },
    ];

    let junho = [
      {
        lua: "nova",
        dia: 3
      },
      {
        lua: "crescente",
        dia: 10
      },
      {
        lua: "cheia",
        dia: 17
      },
      {
        lua: "minguante",
        dia: 25
      },
    ];

    let julho = [
      {
        lua: "nova",
        dia: 2
      },
      {
        lua: "crescente",
        dia: 9
      },
      {
        lua: "cheia",
        dia: 16
      },
      {
        lua: "minguante",
        dia: 25
      },
    ];

    let agosto = [
      {
        lua: "nova",
        dia: 1
      },
      {
        lua: "crescente",
        dia: 7
      },
      {
        lua: "cheia",
        dia: 15
      },
      {
        lua: "minguante",
        dia: 23
      },
      {
        lua: "nova",
        dia: 30
      },
    ];

    let setembro = [
      {
        lua: "crescente",
        dia: 6
      },
      {
        lua: "cheia",
        dia: 14
      },
      {
        lua: "minguante",
        dia: 22
      },
      {
        lua: "nova",
        dia: 28
      },
    ];

    let outubro = [
      {
        lua: "crescente",
        dia: 5
      },
      {
        lua: "cheia",
        dia: 13
      },
      {
        lua: "minguante",
        dia: 21
      },
      {
        lua: "nova",
        dia: 28
      },
    ];

    let novembro = [
      {
        lua: "crescente",
        dia: 4
      },
      {
        lua: "cheia",
        dia: 12
      },
      {
        lua: "minguante",
        dia: 19
      },
      {
        lua: "nova",
        dia: 26
      },
    ];

    let dezembro = [
      {
        lua: "crescente",
        dia: 4
      },
      {
        lua: "cheia",
        dia: 12
      },
      {
        lua: "minguante",
        dia: 19
      },
      {
        lua: "nova",
        dia: 26
      },
    ];

    return [janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro];
  }

}
