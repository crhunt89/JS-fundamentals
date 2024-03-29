/* *****************
? SWITCH
***************** */

let friend = 'Bob';

switch(friend) {
    case 'Autumn':
        console.log('Hey Autumn, when are we going rock wall climbing?');
     break;
    case 'Dave':
        console.log('Hey Dave, how is Cooper?');
     break;
    case 'Alecx':
        console.log('Hey Alecx, when are we playing DnD?');
     break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}
// Break keyword forces machine to go to next line

let dessert = 'pop'

switch(dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!')
    break;
    case 'cake':
        console.log('Cake is great!')
    break;
    case 'ice cream':
        console.log('I scream for ice cream!')
    break;
    default:
        console.log('Not on the menu.')
}

let age = 20

switch(true) {
    case (age >= 25):
        console.log('Yay! You can rent a car!')
        break;
    case (age >= 21):
        console.log('Yay! You can drink!')
        break;
    case (age >= 18):
        console.log('Yay! You can vote!')
        break;
    case (age <= 17):
        console.log('Sorry, you\'re too young to do anything.')
        break;
    default:
        console.log('You\'re not even a person')
}