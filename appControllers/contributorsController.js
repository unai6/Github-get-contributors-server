let fetch = require('node-fetch')

exports.getContributors = async (req, res) => {

    try {
        let { owner, repo } = req.query;

        const fetchInfo = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
        const result = await fetchInfo.json();
        
        res.status(200).send(result);

    } catch (error) {
        console.log(error);
    }
}
