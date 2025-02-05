import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-sl">Reading Time: {readingTime} Min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmark Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark = {bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;