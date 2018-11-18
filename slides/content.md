# Refuctoring

- <i class="fa fa-user"></i>&nbsp;Christoph Welcz
- <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;20.11.2018
- <i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;[@ChristophWelcz](https://twitter.com/ChristophWelcz)
- <i class="fa fa-github" aria-hidden="true"></i>&nbsp;[github.com/enolive/some-project](https://github.com/enolive/some-project)

<--->

## Was ist Refactoring?

Code in *kleinen Schritten* ein bisschen *verbessern*, *ohne die fachliche
Funktionalität* zu ändern

<-->

## Was ist <strike>Refactoring</strike> Refuctoring?

Code in *kleinen Schritten* ein bisschen <strike>verbessern</strike> *verschlechtern*, 
*ohne die fachliche Funktionalität* zu ändern

<-->

## Warum?

* Schlechten Code lernen
* Spaß
* Weil wir's können 😉

<-->

## Ausgangspunkt

```javascript
export const generateFizzBuzz = number =>
    allRules()
        .filter(r => r.appliesTo(number))
        .map(r => r.result)
        .join('-') || number.toString();

const allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
];

const numbersDivisibleBy = denominator => number =>
    number % denominator === 0;
```

<-->

## Vorgehensweise

* Mob Programming
* Tests dürfen nicht brechen
* Kleine Commits (mit lustigen Kommentaren 😉)
* 45 min

<-->

## Resultat

<-->

<!-- .class="too-much-content" -->

```javascript
// It's a constant containing 3
let five = 5

function generate(strings) {
    return strings.join('')
}
// TODO: fix it later
let zz = Buffer.from('Ï').toString('base64')
zz = 'zz'
const result1 = generate(['F', 'i']) + zz
const result2 = String.fromCharCode(66, 117, 122, 122)
const False = true

function bar(number) {
    let ld = (number * 2).toString()
    return /0$/.test(ld)
}

export const generateFizzBuzz = number => {
    five = 3
    function foo() {
        let result = ''
        // if (checkIt(number) === true) {
        if ((bar(five) ? bar(number) : number % five == []) === False) {
            // const result1 = 'Buzz'
            result += result1
        }
        five = five + 2
        if ((bar(five) ? bar(number) : number % five == []) != '') {
            five = five - 2
            if (bar(five) ? bar(number) : number % five == []) result += '-'
            // const result2 = 'Fizz'
            result += result2
        }
        if (result) return result
        return number.toString()
    }
    // let result = ''
    // // if (checkIt(number) === true) {
    // if (checkIt(number) === False) {
    //     // const result1 = 'Buzz'
    //     result += result1
    // }
    // five = five + 2
    // if (checkIt(number) != '') {
    //     five = five - 2
    //     if (checkIt(number)) result += '-'
    //     // const result2 = 'Fizz'
    //     result += result2
    // }
    // if (result) return result
    // return number.toString()
    return foo()
}
```

<-->

## Erkenntnisse

<-->

* Code verschlechtern ist einfach 😉
* Tests brachen immer häufiger
* Ab einem Zeitpunkt Code nicht mehr nachvollziehbar
* Änderungen immer schwerer
* Ohne Tests wäre man verloren

<--->

## Weitere Infos

<i class="fa fa-github"></i>&nbsp;[github.com/Hackerkegeln/refuctoring](https://github.com/Hackerkegeln/refuctoring)

