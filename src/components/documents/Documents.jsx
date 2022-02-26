import React from 'react';

const data = [
	{
		"FileId": 1021,
		"FileType": "Form",
		"FileName": "Form1.pdf",
		"FileDescrEn": "Form - Announcements",
		"FileDescrFr": null,
		"MimeType": "application/pdf",
		"FileData": null
	},
	{
		"FileId": 1023,
		"FileType": "Form",
		"FileName": "Form3.pdf",
		"FileDescrEn": "Form - Request for Non-Smoker Rates",
		"FileDescrFr": null,
		"MimeType": "application/pdf",
		"FileData": null
	},
	{
		"FileId": 1024,
		"FileType": "Form",
		"FileName": "Form4.pdf",
		"FileDescrEn": "Form - Guaranteed Acceptance for New Employees",
		"FileDescrFr": null,
		"MimeType": "application/pdf",
		"FileData": null
	}
];

const Documents = () => {
    
    data.push(data.shift());
    let theOne = data.find(x => x.FileDescrEn === 'Form - Announcements')

    return(
        <>
            <h2>My Documents</h2>
            <div style={{display: 'inline-flex'}}>
                {data.map((r) => (
                    <>
                        <div>
                            <p style={{margin: '10px'}}>{r.FileId}</p>
                            <p style={{margin: '10px'}}>{r.FileName}</p>
                        </div>
                    </>
                ))}
                <div style={{margin: '10px'}}>{theOne.FileId}</div>
            </div>
            
        </>
    );
}

export default Documents;