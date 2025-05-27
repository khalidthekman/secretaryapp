import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import {setDoc, doc, getDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './notebook.css';
import { NotebookData } from '../contexts/notebookContexts'

const Notebook = () => {
    const { id } = useParams<{ id: string }>();
    const [notebook, setNotebook] = useState<NotebookData>();
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const fetchNote = async () => {
            if (!id) return;

            const note = doc(db, 'notebooks', id);
            const noteSnapshot = await getDoc(note);

            if (!noteSnapshot.exists()) {
                console.error("Note not found");
                setIsLoading(false);
                return;
            }
            const noteData = noteSnapshot.data();
            setInput(noteData.content);
            setNotebook(noteData.content);
            setIsLoading(false);
        };
        fetchNote();
    }, [id]);
    async function updateNoteInFirestore(newContent: string) {
        try {
            if (!id) return;
            const note = doc(db, 'notebooks', id);
            await setDoc(note, { content: newContent }, {merge: true});
        } catch (err) {
               console.error("Error adding note skill issue: ", err) 
            }
            finally {
                setIsLoading(false);
            }
         }

         useEffect(() => {
            console.log("Check unchanged, wait 1 second before updating firestore, blah blah blah.")
            if (input === notebook?.content) {
                return;
            }
        }, []);
    };
    

export default Notebook;
