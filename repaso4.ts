export class Punto{
    private x:number;
    private y:number;

    public constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    public toString():void{
        console.log(`${this.x},${this.y}`);

    }
    public getX():number{
        return this.x;
    }

    public setX(x:number):void{
        this.x=x;
    }
    
    public getY():number{
        return this.y;
    }

    public setY(y:number):void{
        this.y=y;
    }
    
    public DistanciaAlOrigen():number{
        let distancia:number = 0;
        distancia = Math.sqrt((this.x*this.x) + (this.y*this.y));
        return distancia;
    }

    public CalcularDistancia(otroPunto:Punto):number{
        let distancia2:number = 0;
        distancia2 = Math.sqrt(Math.pow((this.x-otroPunto.getX()),2) + Math.pow((this.y-otroPunto.getY()),2));
        return distancia2;
    }

    public CalcularCuadrante():number{
        let cuadrante:number = 0;
        if(this.x == 0 || this.y == 0){
            cuadrante=0;
        }else if(this.x>0 && this.y>0){
            cuadrante=1;
        }else if(this.x<0 && this.y>0){
            cuadrante=2;
        }else if(this.x<0 && this.y<0){
            cuadrante=3;
        }else if(this.x>0 && this.y<0){
            cuadrante=4;
        }else{
            ("No ahí cuadrante");
        }
        return cuadrante;
    }

    public CalcularMasCercano(puntos:Punto[]):Punto{
        let puntoCer:number = null;
        let puntoOrigen:Punto = new Punto(this.getX(),this.getY());
        for(let i = 0;i<puntos.length;i++){
            if(puntoCer == null || Math.abs(puntos[puntoCer].CalcularDistancia(puntoOrigen)) > Math.abs(puntos[i].CalcularDistancia(puntoOrigen))){
                puntoCer = i;
            }
        }
        return puntos[puntoCer];
    } 
}
