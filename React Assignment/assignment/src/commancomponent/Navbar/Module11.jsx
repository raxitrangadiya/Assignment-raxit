import React from 'react'; 
import any from './table.module.css'
const Module11 = () => {
    return (
        <div>
            <form action="" id="user-form" method="get"  className={any.form}>
                <table className={any.tdata}>
                    <tr >
                        <td><label>First Name:</label></td>
                        <td><input type="text" id="firstname" className={any.in_size} name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="firstNameCheck"></span></td>
                    </tr>
                    <tr >
                        <td><label>Last Name :</label></td>
                        <td><input type="text" id="lastname" className={any.in_size} name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="lastNameCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input type="text" id="email" className={any.in_size} name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="emailCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Mobile:</label></td>
                        <td><input type="text" id="mobile" className={any.in_size} name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="mobileCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Mobile:</label></td>
                        <td><input type="radio" name="gender" />Male  &nbsp; <input type="radio" name="gender" />Female &nbsp;<span id="genderCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label >Date Of Birth:</label></td>
                        <td><input type="date" className={any.in_size} /><br /> </td>

                    </tr>
                    <tr>
                        <td><label >Address:</label></td>
                        <td><textarea name="address" id={any.address} className={any.in_size} autocomplete="off" autofocus="autofocus" required></textarea><br /> <span id="addressCheck"></span></td>
                    </tr>
                    <tr>
                        <td> <label>City:</label></td>
                        <td> <input type="text" id="city"className={any.in_size} autocomplete="off" autofocus="autofocus" required />
                            <br /><span id="cityCheck"></span></td>
                    </tr>
                    <tr >
                <td> <label >Area Pin:</label></td>
                <td> <input type="text" id="pin" className={any.in_size}autocomplete="off" autofocus="autofocus" required/> 
                    <br/>
                <span id="pinCheck"></span></td>
            </tr>
            <tr >
                <td> <label >State:</label></td>
                <td> <input type="text" id="state"className={any.in_size} autocomplete="off" autofocus="autofocus" required/><br/>
                <span id="stateCheck"  ></span></td>
            </tr>
            <tr >
                <td> <label >Qualification</label></td>
                <td> <select name="Qualification" id="Qualification" >
                    <option value="Select Qualification">Select Qualification </option>
                    <option value="B.com">B.com</option>
                    <option value="B.sc">B.sc</option>
                    <option value="B.E">B.E</option>
                    <option value="B.A">B.A</option>
                    <option value="">B.A</option>
                </select></td>
            </tr>
            <tr >
                <td><label class="specialization" >Specialization</label></td>
                <td>
                    <input type="radio" name="box" />Computer Science <br/>
                    <input type="radio" name="box" />Information Technology <br/>
                    <input type="radio" name="box" />Computer Architecture <br/>
                    <input type="radio" name="box" />Tele Communication
                </td>
            </tr>
            <tr >
                <td><label>Password:</label></td>
                <td><input type="password" id="password" className={any.in_size} autocomplete="off" autofocus="autofocus" required/><br/>
                <span id="pswCheck"></span></td>
            </tr>
            <tr >
                <td>
                    <input type="submit"  onclick=" return validation()"value="Registered" id={ any.btn}/>
                </td>
            </tr>
                </table>
            </form>
        </div>
    );
};

export default Module11;