import React from 'react'
import {makeAutoObservable, action, observable} from "mobx";
class Store {
    @observable
    public persons = [
        {
            id: 1,
            name: 'Ivanov Ivan Ivanovich',
            position: 'Менеджер',
            dateOfBirth: '1991-06-20',
            gender: 'Male',
            working: true,
            active:false
        },
        {
            id: 2,
            name: 'Petrov Petr Petrovich',
            position: 'Художник',
            dateOfBirth: '1993-04-18',
            gender: 'Male',
            working: true,
            active:false
        },
        {
            id: 3,
            name: 'Sidorova Olga Sergeevna',
            position: 'Дизайнер',
            dateOfBirth: '1994-02-23',
            gender: 'Female',
            working: false,
            active:false
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    @action
    editPerson(index, person){
        this.persons[index] = person
    }
    @action
    deletePerson(id){
        this.persons = this.persons.filter(person => person.id != id )

    }

}

export default Store