class Photo{
    constructor(width = 8,height = 10)
    {
        this.height=height;
        this.width=width;
    }

    Price(){
        let price;
        if(this.width==8 && this.height==10)
        {
            return price=4;
        }
        else if(this.width==10 && this.height==12)
        {
            return price=6;
        } 
        else{
            return price=10;
        }
        
    }

    toString()
    {
        // return "This is a" + this.width + "by" + this.height + "photo" +  "it costs" +this.price;
        return `This is a  ${this.width} by ${this.height} photo it costs ${this.Price()}`;
    }

}