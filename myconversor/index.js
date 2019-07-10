module.exports = async function (context, req) {
    if (req.query.number){
        if (req.query.number > 9000){
            context.res = {               
                body: "Sorry, The number must be lower than 9000"
            };
        }else{
            var unity, ten, hundred, OT_Uit, u, t, h, OT_U;
            unity = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
            ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
            hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
            OT_Uit= ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"];
            u= req.query.number % 10;
            t = Math.floor(req.query.number / 10) % 10;
            h = Math.floor(req.query.number / 100) % 10;
            OT_U = Math.floor(req.query.number / 1000);       
    
            if (req.query.number >= 1000){
                req.query.roman = OT_Uit[OT_U] + hundred[h] + ten[t] + unity[u]
            }else if (req.query.number >= 100){
                req.query.roman =  hundred[h] + ten[t] + unity[u]
            }else if (req.query.number >= 10){
                req.query.roman =  ten[t] + unity[u]
            }else if (req.query.number >= 1 ){
                req.query.roman = unity[req.query.number]
            }
                if (req.query.name){
                    context.res = {
                        // status: 200, /* Defaults to 200 */
                        body: "Hi " + (req.query.name || req.body.name) +"\n"+
                         "You entered the number "+ req.query.number  + "\n"+                    
                        "And his roman correspondient  is "+ req.query.roman
                    };    
                } else {
                    context.res = {
                        // status: 200, /* Defaults to 200 */
                        body: "Hi ANONYMOUS" + "\n" +
                        "You entered the number "+ req.query.number + "\n"+
                        "And his roman correspondient  is "+ req.query.roman
                    };
                } 
        }       
    }else if (req.query.name){
        context.res = {            
            body: "HI " + req.query.name + " Please pass a number in the query string"
        };
    }else{
        context.res = {
            status: 400,
            body: "Please pass a  number to convert  on the query string"
        };

    }
};