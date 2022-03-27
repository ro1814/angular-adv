import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [
    [10, 15, 40],
  ];
  public labels2: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data2 = [
    [33, 55, 30],
  ];
  public labels3: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data3 = [
    [50, 40, 10],
  ];
  public labels4: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data4 = [
    [20, 10, 70],
  ];

}
