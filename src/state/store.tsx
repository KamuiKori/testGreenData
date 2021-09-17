import React from 'react'
import {makeAutoObservable, action, observable} from "mobx";
class Store {
    @observable
    public persons = [
        {
            id: 1,
            name: 'Ivanov Ivan Ivanovich',
            position: 'Менеджер',
            dateOfBirth: '30.01.1991',
            gender: 'Male',
            working: true,
        },
        {
            id: 2,
            name: 'Petrov Petr Petrovich',
            position: 'Художник',
            dateOfBirth: '22.02.1993',
            gender: 'Male',
            working: true
        },
        {
            id: 3,
            name: 'Sidorova Olga Sergeevna',
            position: 'Дизайнер',
            dateOfBirth: '16.03.1994',
            gender: 'Female',
            working: false
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    @action
    editPerson(index, person){
        this.persons[index] = person
    }

}

export default Store