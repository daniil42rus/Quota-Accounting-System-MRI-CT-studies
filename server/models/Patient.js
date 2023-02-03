import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			// required: true,
		},
		birthday: {
			type: String,
			// required: true,
		},
		oms: {
			type: Number,
		},
		phone: {
			type: String,
		},
		from: {
			type: String,
		},
		research: {
			type: String,
		},
		researchdescription: {
			type: String,
		},
		doctor: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Patient', PatientSchema);
