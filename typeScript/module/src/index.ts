import { makePerson} from './person/Person'
import IPerson from './person/IPerson'

const testMakePerson = ():void => {
	let jane: IPerson = makePerson('Jane')
	let jack: IPerson = makePerson('Jack')
	console.log(jane, jack)
}

testMakePerson()