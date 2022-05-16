import { Punto } from "./repaso4";

export class Triangulo{

    private x:Punto;
    private y:Punto;
    private z:Punto;
    
    public constructor(x:Punto,y:Punto,z:Punto){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    
    public CalcularLongitudLados():number[]{
        let lados:number[] = [];
        lados[0]=this.x.CalcularDistancia(this.y);
        lados[1]=this.x.CalcularDistancia(this.z);
        lados[2]=this.y.CalcularDistancia(this.z);
        return lados;
    }
}