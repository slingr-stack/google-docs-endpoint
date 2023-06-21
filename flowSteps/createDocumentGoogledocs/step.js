step.createDocumentGoogledocs = function (inputs) {

	var inputsLogic = {
		title: inputs.title || ""
	};

	return endpoint.documents.post(inputsLogic);
};