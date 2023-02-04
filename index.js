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

     currentPulls.forEach(async pull => {
        pullNumber = pull.number
        updateBranch(pullNumber).then(() => {
            console.log('quote');
          }).catch((error) => {
            console.error(error);
          });
        // if (respnse.status !== 200) {
        //     console.log("pull request: "+pull.title+" can not be updated")
        //     console.log("please visit "+pull.url+" to update it manually")
        // } 
        // else {
        //     console.log("pull request: "+pull.title+" is updated")
        // }  
    })

} 

function updateBranch(pullNumber) {
    octokit.rest.pulls.updateBranch({
        owner,
        repo,
        pull_number: pullNumber,
        });
}
    
    


run();