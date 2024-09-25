'use strict'

const checkout = async (req, res) => {
   try {

      // console.log("checkout is :" , req.body);

      const { amount } = req.body;

   }
    catch (error) {
   console.error(" errror is :", error);

}

}

module.exports = { checkout }