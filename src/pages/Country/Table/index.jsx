import React, { useEffect, useState } from 'react';
import { ContryData } from "../../../ContryData"
import Modal from '../Modal';
import { useFormik } from 'formik';
import { v4 } from 'uuid';
import * as Yup from 'yup'

const Table = () => {
    const [contryData, setContryData] = useState([])
    const [action, setAction] = useState({})

    useEffect(() => {
        setContryData([...ContryData])
    }, [])
    const editCountryForm = useFormik({
        initialValues: {
            id: '',
            name: '',
            code: '',
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('You must fill in this section!'),
            code: Yup.string().required('You must fill in this section!'),
            description: Yup.string().required('You must fill in this section!'),
        }),
        onSubmit: (values) => {
            const newCountryData = contryData.map(contr => {
                if (contr.id === values.id) {
                    return {
                        ...contr,
                        name: values.name,
                        code: values.code,
                        description: values.description
                    }
                }
                return contr
            })
            setContryData(newCountryData)
        }
    })

    const createCountryForm = useFormik({
        initialValues: {
            name: '',
            code: '',
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('You must fill in this section!'),
            code: Yup.string().required('You must fill in this section!'),
            description: Yup.string().required('You must fill in this section!'),
        }),
        onSubmit: (values) => {
            setContryData([
                ...contryData,
                {
                    id: v4(),
                    ...values
                }
            ])
        }
    })

    const handleOpenModalEdit = (data) => {
        setAction({
            ...action,
            type: 'edit',
            data
        })
        editCountryForm.setFieldValue('id', data.id)
        editCountryForm.setFieldValue('name', data.name)
        editCountryForm.setFieldValue('code', data.code)
        editCountryForm.setFieldValue('description', data.description)
    }
    return (
        <div>
            <Modal action={action} contryData={contryData} setContryData={setContryData} editCountryForm={editCountryForm} createCountryForm={createCountryForm} />
            <section class="vh-100" style={{ backgroundColor: "#eee" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card rounded-3">
                                <div class="card-body p-4">

                                    <h4 class="text-center my-3 pb-3">Country</h4>

                                    <button onClick={() => setAction({
                                        ...action,
                                        type: "create",
                                        data: []
                                    })} className='btn btn-primary float-start mb-3 ' data-bs-toggle="modal" data-bs-target="#myModal">Create new Country</button>
                                    <table class="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Code</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contryData.map((item, index) => (
                                                <tr key={"contry_" + index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.code}</td>
                                                    <td>{item.description}</td>
                                                    <td>
                                                        <button onClick={() => setAction({
                                                            ...action,
                                                            type: 'delete',
                                                            data: item
                                                        })} type="submit" data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-danger">Delete</button>
                                                        <button onClick={() => handleOpenModalEdit(item)} type="submit" data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-success ms-1">Edit</button>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Table;