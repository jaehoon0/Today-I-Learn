import { makePerson} from './person/Person'
import IPerson from './person/IPerson'
import Chance from 'chance'
import * as R from 'ramda'

const testMakePerson = ():void => {
	let jane: IPerson = makePerson('Jane')
	let jack: IPerson = makePerson('Jack')
	console.log(jane, jack)
}

testMakePerson()