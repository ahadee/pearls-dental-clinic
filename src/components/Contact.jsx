import React from 'react'
import { Formik } from 'formik';

function Contact() {
    return (
        <div>
            <section id="contact" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="wow fadeInDown animated">Hubungi Kami</h2>
                        <p className="wow fadeInDown animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus
          vitae massa <br /> semper aliquam quis mattis quam.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 conForm">
                            <div id="message"></div>
                            <Formik
                                initialValues={{ email: '', name: '', phone: '', comments: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.name) {
                                        errors.name = 'Nama Tidak Boleh Kosong'
                                    } else if (/[0-9]/g.test(values.name)) {
                                        errors.name = 'Format Nama salah'
                                    }
                                    if (!values.phone) {
                                        errors.phone = 'Nomor Telepon Tidak Boleh Kosong'
                                    } else if (/[a-zA-Z]/g.test(values.phone)) {
                                        errors.phone = 'Format Nomor Telepon Salah'
                                    }
                                    if (!values.comments) {
                                        errors.comments = 'Pesan Tidak Boleh Kosong'
                                    }
                                    if (!values.email) {
                                        // errors.email = 'Email Tidak Boleh Kosong';
                                    } 
                                    else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Format Email Salah';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    // setTimeout(() => {
                                        alert(JSON.stringify('pesan di proses ke whatsapp'));
                                        setSubmitting(false);
                                    // }, 400);
                                    const send = () => {
                                        const urlMobile = 'https://api.whatsapp.com/send?phone=+62895334199749&text='
                                        const urlWeb = 'https://web.whatsapp.com/send?phone=+62895334199749&text='
                                        let message = `Nama: ${values.name} \r\n`
                                        message += `Email: ${values.email} \r\n`
                                        message += `Phone: ${values.phone} \r\n`
                                        message += `Pesan: ${values.comments}\r\n`
                                        message = window.encodeURIComponent(message)
                                        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                                            window.open = (urlMobile+message)
                                        }
                                        else {
                                            window.open = (urlWeb+message)
                                        }
                                    }

                                    send()
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                        <form onSubmit={handleSubmit}>
                                            <input name="name" id="name" type="text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                                placeholder="Nama Anda..." onChange={handleChange} onBlur={handleBlur} value={values.name} />
                                            <p style={{ color: "red", fontStyle: "italic" }}>
                                                {errors.name && touched.name && errors.name}
                                            </p>
                                            <input name="email" id="email" type="email" className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr"
                                                placeholder="Alamat Email..." onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                            <p style={{ color: "red", fontStyle: "italic" }}>
                                                {errors.email && touched.email && errors.email}
                                            </p>
                                            <input name="phone" id="phone" type="text" className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr"
                                                placeholder="Nomor Telepon..." onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                                            <p style={{ color: "red", fontStyle: "italic" }}>
                                                {errors.phone && touched.phone && errors.phone}
                                            </p>
                                            <textarea name="comments" id="comments" cols="" rows="" className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                                placeholder="Pesan..." onChange={handleChange} onBlur={handleBlur} value={values.comments}></textarea>
                                            <p style={{ color: "red", fontStyle: "italic" }}>
                                                {errors.comments && touched.comments && errors.comments}
                                            </p>
                                            <input type="submit" id="submit" name="send" className="submitBnt" value="Kirim" disabled={isSubmitting} />

                                            <div id="simple-msg"></div>
                                        </form>
                                    )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
