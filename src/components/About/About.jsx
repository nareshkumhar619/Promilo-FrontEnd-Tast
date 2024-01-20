import React from 'react'
import FolderStructure from './FolderStructure'
import Navbar from '../Navbar'

function About() {
    return (
        <div className='flex flex-col'>
        <div>

            <Navbar />
        </div>
            <p className='text-start text-5xl font-bold text-slate-600 mt-28 md:mt-20 ml-32'> About </p>
            <div className='flex justify-end items-end ml-16 md:-mt-24'>
                <div className='flex flex-col space-y-8 -mr-20 md:mr-24'>
                    <div className='bg-orange-200 p-8 mt-16 rounded-lg shadow-lg mr-32'>
                        <div className='flex p-4 space-x-4'>
                            <span class="material-symbols-outlined">
                                folder_open
                            </span>
                            <p>Folder Structure</p>
                        </div>
                        <FolderStructure />
                    </div>
                    <div className='p-6 bg-green-200 w-[25rem] text-start'>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex space-x-4'>
                                <span class="material-symbols-outlined">
                                    account_tree
                                </span>
                                <p className='text-xl'> Why this folder structure ? </p>
                            </div>
                            <p className='mt-2 text-sm'>
                                Hi, So first of all as this was a E-Commerce website. The maintainance and reusability of code had to be top-notch.
                                It was obvious that it would need several pages for integrating all its necessary features so to keep the code clean and modular <br />I decided to keep them in separate folders of their own. Which will differentiate them completely.<br />
                                I looked the website from a broader point-of-view and decided to make it how it should be if it was going into production.<br />
                                Creating MyCard page for users to add items to their cart.<br />
                                Maintaining the states of components globally so that the readability of the code is unmatched and use of the states is also easier and efficient.
                            </p>
                        </div>
                    </div>
                    <div className='p-6 bg-red-200 w-[25rem] text-start'>

                        <div className='flex space-x-4'>
                            <span class="material-symbols-outlined">
                                lightbulb
                            </span>
                            <p className='text-xl'> My Approach ? </p>
                        </div>
                        <p className='mt-2 text-sm'>
                            Firstly, I decided as it is a provision store and it is going to contain all the food items and groceries and other necessary things. The theme should be catching and pleasing to the user which landed me to choose this color combination so they are hooked to the website <br />
                            I decided to keep them in separate folders of their own. Which will differentiate them completely.<br />
                            I looked the website from a broader point-of-view taking into account its scalability and features and decided to make it how it should be if it was going into production.<br />
                            Creating MyCard page for users to add items to their cart.<br />
                            Using ContextAPI Maintaining the states of components globally so that the readability of the code is unmatched and use of the states is also easier and efficient.<br />
                            Created a separate util folder to hash the password into sha256-encryption format.<br />
                            Created a Signup page to welcome the new users to the best Provision Store.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About