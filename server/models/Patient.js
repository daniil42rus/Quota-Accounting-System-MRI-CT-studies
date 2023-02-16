import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		birthday: {
			type: String,
			required: true,
		},
		oms: {
			type: Number,
			unique: true,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		from: {
			type: String,
			required: true,
		},
		research: {
			type: String,
			required: true,
		},
		researchdescription: {
			type: String,
			required: true,
		},
		doctor: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Patient', PatientSchema);
