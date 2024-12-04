// routes/bookmarks.js
import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// In routes/bookmarks.js
router.get('/:userId/bookmarks', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId).populate('bookmarks.universityId');
        res.status(200).json({ bookmarks: user.bookmarks });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookmarks' });
    }
});


// Add a program to bookmarks
router.post('/bookmark', async (req, res) => {
    const { userId, universityId, programId } = req.body;
    try {
        const user = await User.findById(userId);
        const isBookmarked = user.bookmarks.some(
            bookmark => bookmark.programId === programId && bookmark.universityId.toString() === universityId
        );
        if (!isBookmarked) {
            user.bookmarks.push({ universityId, programId });
            await user.save();
        }
        res.status(200).json({ message: 'Program bookmarked!' });
    } catch (error) {
        res.status(500).json({ message: 'Error bookmarking program' });
    }
});

// Remove a program from bookmarks
router.delete('/bookmark', async (req, res) => {
    const { userId, programId } = req.body;
    try {
        const user = await User.findById(userId);
        user.bookmarks = user.bookmarks.filter(
            bookmark => bookmark.programId !== programId
        );
        await user.save();
        res.status(200).json({ message: 'Program unbookmarked!' });
    } catch (error) {
        res.status(500).json({ message: 'Error unbookmarking program' });
    }
});

export default router;
