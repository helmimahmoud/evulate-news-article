// js file 
import { handleSubmit } from './js/handleSubmit'
// scss file
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/resets.scss'

// js code 
let clickedBtn = document.getElementById('form')
clickedBtn.addEventListener('submit', handleSubmit)
