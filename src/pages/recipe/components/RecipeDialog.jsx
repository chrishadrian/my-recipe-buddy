// eslint-disable-next-line object-curly-newline
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import generateImage from '../../../utils/openai';

export default function RecipeDialog(props) {
	const { open, setOpen, recipes } = props;
	const [recipeName, setRecipeName] = useState('');
	const [recipeDescription, setRecipeDescription] = useState('');
	const [recipeLink, setRecipeLink] = useState('');

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const imageURL = generateImage('A bowl of pesto pasta salad');

		recipes.push({
			id: recipes.length + 1,
			title: recipeName,
			description: recipeDescription,
			image: imageURL,
			link: recipeLink,
		});

		setRecipeName('');
		setRecipeDescription('');
		setRecipeLink('');
		setOpen(false);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a New Recipe</DialogTitle>
			<DialogContent>
				<form onSubmit={handleSubmit} className='space-y-4 pt-4'>
					<TextField
						autoFocus
						id='recipe-name'
						label="Recipe's Name"
						type='text'
						value={recipeName}
						onChange={(event) => setRecipeName(event.target.value)}
						fullWidth
					/>
					<TextField
						id='recipe-description'
						label="Recipe's Description"
						type='text'
						value={recipeDescription}
						onChange={(event) => setRecipeDescription(event.target.value)}
						fullWidth
					/>
					<TextField
						id='recipe-link'
						label="Recipe's Link"
						type='text'
						value={recipeLink}
						onChange={(event) => setRecipeLink(event.target.value)}
						fullWidth
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleSubmit}>Add Recipe</Button>
			</DialogActions>
		</Dialog>
	);
}
