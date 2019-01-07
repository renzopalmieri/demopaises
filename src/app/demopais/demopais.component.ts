// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnDestroy, ModuleWithComponentFactories } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-demopais',
  templateUrl: './demopais.component.html',
  styleUrls: ['./demopais.component.css']
})
export class DemopaisComponent   implements OnInit , OnChanges  {

chart:Chart ;
serie:any[];
itemSelected: string;
series:any[] = [];
data:any[] = [];
sub: any;
country: any;
pais: string;
years:any[] = [];
datos:any[] = [];
countries:any[] = [];
codpais:string = "";
flag:boolean = false;

  constructor(private service: DashboardService) {
    this.chart = new Chart() ;

   }

  ngOnInit() {
    this.service.restAllCountry()
    .subscribe(
      Response => {
        this.country = Response;
        this.country.forEach(element => {
                  this.countries.push({
                    name: element.name,
                    code : element.alpha3Code
                  });
          });
          console.log(this.countries);
      });
if(this.flag === false){
  this.pais = "selecao um pais";
  var initcountry = '/BRA/' ;
  this.loadAll(initcountry );

}
else{
  this.loadAll(this.codpais);

}
  }


  ngOnChanges(changes: SimpleChanges){
    this.flag = true;
 }



 loadAll(codpais?:any) {
  this.years = [];
  var name = " ";
  let arrayObjt = [];
  this.datos = [];

      console.log(codpais);
      this.service.restCountryWB(codpais)
      .subscribe(
        Response => {
          this.sub = Response[1];
          console.log(this.sub);
          this.sub.forEach(element => {
                    this.years.push(element.date);
                    name = element.country.value;
                    this.datos.push(
                       element.value
                    );
            });
            // newArray.push({
            //  id: element.country.id,
           // });
            console.log(this.datos);

          arrayObjt.push({
            name: name,
            data: this.datos
            });
        this.serie = arrayObjt;
         arrayObjt = [];
        console.log("validacion datos" +  this.serie);

        console.log("Fechas enviadas al grafico" + " " + this.years);
        this.gridCharge(this.years , this.serie);

        });

      }


      gridCharge( fecha ?:any, data?:any) {
        console.log("verificacion fecha grafico : + "+ "" + fecha);
        this.chart = null;


        var plotLineId = 'myPlotLine'; // To identify for removal

       var plotLineOptions = {
          color: '#ff5b6b',
          id: plotLineId,
          width: 2,
          value: 5.5,
          dashStyle: 'shortdash'
      };
      this.chart = new Chart({
          chart: {
            type: 'line',
          },
          plotOptions: {
            series: {
                lineWidth: 3,
                animation: true
            }
        },
          title: {
            text: this.itemSelected
          },
          xAxis: {
            categories: fecha,

          },
          legend: { enabled: true },
          series: data

        });

    }

    filtro( indice:any, boton:any , event){
      console.log(boton.code);

      this.codpais = boton.code;
      this.pais = boton.name;
      this.flag = true;
      this.loadAll(this.codpais);
        }












}
