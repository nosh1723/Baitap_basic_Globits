import React from 'react';
import { v4 } from 'uuid'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Popup = ({ action, contryData, setContryData, editCountryForm, createCountryForm }) => {
    const handleDelete = (id) => {
        const newCountryData = contryData.filter(country => country.id !== id)
        setContryData(newCountryData)
    }

    return (
        <div>
            <div class="modal fade" id='myModal' tabindex="-1">
                <div class="modal-dialog">
                    {action.type === 'edit' ?
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit country</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={editCountryForm.handleSubmit}>
                                <div class="modal-body">
                                    <input type="text" value={editCountryForm.values.id} class="form-control" name='id' id="id" hidden />
                                    <div class="mb-3  text-start">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" onChange={editCountryForm.handleChange} value={editCountryForm.values.name} class="form-control" name='name' id="name" />
                                    </div>
                                    <div class="mb-3  text-start">
                                        <label for="code" class="form-label">Code</label>
                                        <input type="text" onChange={editCountryForm.handleChange} value={editCountryForm.values.code} class="form-control" name='code' id="code" />
                                    </div>
                                    <div class="mb-3  text-start">
                                        <label for="description" class="form-label">Description</label>
                                        <input type="text" onChange={editCountryForm.handleChange} value={editCountryForm.values.description} class="form-control" name='description' id="description" />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type='submit' class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                        :
                        <>{action.type === "delete" ?
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Delete country ?</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button onClick={() => handleDelete(action.data.id)} type="button" class="btn btn-primary">OK!</button>
                                </div>
                            </div>
                            :
                            <form onSubmit={createCountryForm.handleSubmit}>
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Create new country</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div>
                                            <div className='text-start mb-2'>
                                                <label for="name" class="form-label">Name</label>
                                                <input type="text" onChange={createCountryForm.handleChange} value={createCountryForm.values.name} name='name' class="form-control" id="name" />
                                                {createCountryForm.errors.name && createCountryForm.touched.name && <p className='text-danger mt-1'>{createCountryForm.errors.name}</p>}
                                            </div>
                                            <div className='text-start mb-2'>
                                                <label for="code" class="form-label">Code</label>
                                                <input type="text" class="form-control" onChange={createCountryForm.handleChange} value={createCountryForm.values.code} name='code' id="code" />
                                                {createCountryForm.errors.code && createCountryForm.touched.code && <p className='text-danger mt-1'>{createCountryForm.errors.code}</p>}
                                            </div>
                                            <div className='text-start mb-2'>
                                                <label for="description" class="form-label">Description</label>
                                                <input type="text" class="form-control" onChange={createCountryForm.handleChange} value={createCountryForm.values.description} name='description' id="description" />
                                                {createCountryForm.errors.description && createCountryForm.touched.description && <p className='text-danger mt-1'>{createCountryForm.errors.description}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        }</>
                    }

                </div>
            </div>
        </div >
    );
};

export default Popup;