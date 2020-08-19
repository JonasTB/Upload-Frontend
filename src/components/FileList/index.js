import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files, onDelete }) => (
    <Container>
        {files.map(uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>
                            {uploadedFile.readableSize}{" "}
                            {!!uploadedFile.url && (
                                <button onClick={() => onDelete(uploadedFile.id)}>Excluir</button>
                            )}
                        </span>
                    </div>
                </FileInfo>

                <div className="d-flex">
                    {!uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressbar
                            className="m-auto m-right-custom"
                            styles={{
                                root: { width: 24 },
                                path: { stroke: '#7159c1' },
                            }}
                            strokeWidth={10}
                            value={uploadedFile.progress}
                        />
                    )}

                    {uploadedFile.url && (
                        <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer" className="m-auto">
                            <MdLink size={24} color='#222' className="m-auto" />
                        </a>
                    )}

                    {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" className="m-auto" />}
                    {uploadedFile.error && <MdError size={24} color="#e57878" className="m-auto" />}
                </div>
            </li>
        ))}
    </Container>
);

export default FileList;
