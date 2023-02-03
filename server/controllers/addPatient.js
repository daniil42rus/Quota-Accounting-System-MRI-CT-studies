import { json } from 'express';
import Patient from '../models/Patient.js';

// Register Patient
export const patient = async (req, res) => {
	try {
		const {
			name,
			birthday,
			oms,
			phone,
			from,
			research,
			researchdescription,
			doctor,
		} = req.body;

		const newPatient = new Patient({
			name,
			birthday,
			oms,
			phone,
			from,
			research,
			researchdescription,
			doctor,
		});

		await newPatient.save();

		res.json({
			newPatient,
			message: `Пациент ${newPatient.name} добавлен на ${newPatient.research} для ${newPatient.researchdescription}`,
		});
	} catch (error) {
		console.log(error);
		res.json({ message: 'Ошибка при создании пользователя.' });
	}
};
