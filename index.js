const core = require("@actions/core");
const github = require("@actions/github");

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

async function run()
{
    const githubToken = core.getInput("GITHUB_TOKEN", { required: true });
    const octokit = new github.getOctokit(githubToken);
    const { data: currentPulls } = await octokit.rest.pulls.list({
        owner,
        repo,
        state: 'open'
    });
    currentPulls.forEach(pull => {
        pullNumber = pull.number
        octokit.rest.pulls.updateBranch({
            owner,
            repo,
            pull_number: pullNumber,
            }).then(function() {
                console.log("pull request: "+pull.title+" has been updated")
            }).catch(function(){
                console.log("pull request: "+pull.title+" could not be updated")
                console.log("please visit "+pull.html_url+" to update manually")
            })
        
    })    
}


run();