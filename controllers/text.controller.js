const translateString = require("../services/text.services")

const translateText = async(req,res)=>{
    try{

        const {text} = req.body;
        console.log(text);
    
        if(!text)
        {
            return res.status(400).json({
                status: 'fail',
                message:`The string to be translated should be provided under the key named "text"`
            })
        }
    
        const translatedString = await translateString(text);

        console.log(translateString);
    
        res.json({
            status:"success",
            translation: translatedString
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            status:"fail",
            message:err.message
        })
    }
   


}

module.exports = translateText;