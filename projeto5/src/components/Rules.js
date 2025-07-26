function clearName(choice) {
    return choice.replace("icon-","").replace(".svg","")
}
function rules(player_choice, house_choice){
    const rules= {
        "paper":["rock","spock"],
        "rock":["lizard","scissors"],
        "scissors":["paper","lizard"],
        "lizard":["spock","paper"],
        "spock":["scissors","rock"]
    }
    const player = clearName(player_choice)
    const house = clearName(house_choice)

    if (player === house) {
        return "draw"
    }
    if (rules[player].includes(house)) {
        return "player_wins"
    }
    else{
        return "house_wins"
    }
} export default rules;