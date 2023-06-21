documentsBatchUpdatePost = () => {
    //INIT_INJECTION
    if (!documentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [documentId].');
        return;
    }
    var url = parse('/documents/:documentId', [documentId]);
    url = url + ":batchUpdate";
    sys.logs.debug('[googledocs] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
    //END_INJECTION
}

module.exports = {
    documentsBatchUpdatePost
};