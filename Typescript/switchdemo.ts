function Calculate(n1:number, n2:number, op:string)
{
    switch(op)
    {
        case"+":
            console.log(`Sum of ${n1} and ${n2} = ${n1+n2}`);
            break;

            case"-":
            console.log(`Sum of ${n1} and ${n2} = ${n1-n2}`);
            break;

            case"*":
            console.log(`Sum of ${n1} and ${n2} = ${n1*n2}`);
            break;

            case"/":
            console.log(`Sum of ${n1} and ${n2} = ${n1/n2}`);
            break;
    }
}
Calculate(5,7,"+");
Calculate(15,7,"/");
Calculate(34,19,"-");