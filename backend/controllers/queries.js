const Queries = require('../models/QueriesModel')

exports.raiseQuery = async (req, res) => {
    try {
        const newQuery = await Queries.create(req.body);
        
        const savedQuery = await newQuery.save();
        res.json({
            success: true,
            data: savedQuery
        })
    } catch (err) {
        return res.json({
            success: false
        })
    }
}

exports.getQueries = async (req, res) => {
    try {
        const queries = await Queries.find();
        const count = await Queries.countDocuments();
        res.json({
            count,
            data: queries
        })
    } catch (err) {
        return res.json({
            error: "Error in fetching queries"
        })
    }
}