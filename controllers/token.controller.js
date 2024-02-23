const tokenModel = require("../models/token.model")

// const storeTokenToDB = async (req,res) => {
//   try {
//     const { token } = req.body;
//     if (!token) return res.status(400).json({ message: 'Token is required' });
//     const tokenCheck = await tokenModel.findOne({ token });
//     if (tokenCheck)
//       return res.status(400).json({ message: 'Token already exists' });

//     const newToken = new tokenModel({ token });
//     await newToken.save();

//     res.status(200).json({
//       statusCode: 200,
//       success: true,
//       message: 'Token stored successfully',
//       data: newToken,
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       statusCode: 500,
//       success: false,
//       message: 'Internal Server Error',
//     });
//   }
// };

const storeTokenToDB = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ message: 'Token is required' });

    const tokenCheck = await tokenModel.findOne({ token });
    if (tokenCheck) {
      // Token already exists, return success response without saving again
      return res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Token already exists',
        data: tokenCheck,
      });
    }

    const newToken = new tokenModel({ token });
    await newToken.save();

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Token stored successfully',
      data: newToken,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      statusCode: 500,
      success: false,
      message: 'Internal Server Error',
    });
  }
};


const getTokensFromDB = async (req,res) => {
  try {
    const tokens = await tokenModel.find({});
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Tokens fetched successfully',
      data: tokens,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      success: false,
      message: 'Internal Server Error',
    });
  }
};


module.exports = {
  storeTokenToDB,
  getTokensFromDB
}