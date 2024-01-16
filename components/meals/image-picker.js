'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState(null);
	const inputRef = useRef(null);

	const handlePickClick = () => {
		inputRef.current.click();
	};

	const imageChangeHandler = (e) => {
		const file = e.target.files[0];

		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picket yet.</p>}
					{pickedImage && <Image src={pickedImage} alt='The image selected by the user.' fill />}
				</div>
				<input type='file' onChange={imageChangeHandler} ref={inputRef} id={name} required accept='image/png, image/jpeg' name={name} className={styles.input} />
				<button className={styles.button} type='button' onClick={handlePickClick}>
					Pick an Image
				</button>
			</div>
		</div>
	);
}
