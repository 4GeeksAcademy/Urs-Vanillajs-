let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let domains = [];

pronoun.forEach(pronounWord => {
    adj.forEach(adjWord => {
        noun.forEach(nounWord => {
            domains.push(pronounWord + adjWord + nounWord + '.com');
        });
    });
});

console.log(domains);
