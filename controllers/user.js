import User from "../models/User.js"


export const registerUser = async (req, res) => {
    const newUser = new User(req.body)

    try {

     const user=await newUser.save()
    res.send('user registerd successfully')
    }
    catch (error) {
        return res.status(400).json({error})
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email, password: password })

        if (user) {
            const temp={
                uname:user.uname,
                email:user.email,
                isAdmin:user.isAdmin,
                _id:user._id
            }
          

            res.send(temp)
        }
       

        else {
            return res.status(400).json({ message: 'login failed' })

        }
    }
    catch (error) {
        return res.status(400).json({ error })

    }
}






export const updateUser = async (req, res, next) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

// export const deleteUser = async (req, res, next) => {
//     try {
//         await User.findByIdAndDelete(req.params.id)
//         res.status(200).json("Hotel has been deleted")
//     } catch (err) {
//         next(err)
//     }
// }

// export const getUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         res.status(200).json(user)
//     } catch (err) {
//         next(err)
//     }
// }

export const getAllUser = async (req, res) => {

    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        return res.status(400).json({ error })
    }
}
