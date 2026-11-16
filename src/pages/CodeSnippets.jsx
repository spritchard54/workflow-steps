import CodeBlock from "../components/CodeBlock";

export function CodeSnippets() {
  return (
    <>
      <h1>Code Snippets</h1>
      <p>
        These are a few code snippets from various exercises to help refresh my
        memory when things are a bit foggy.
      </p>
      <h3>.reduce() method</h3>
      <p>
        The .reduce() method iterates through an array, accumulating a result.
        The value returned by the callback becomes the accumulator for the next
        iteration. Once all elements have been evaluated, .reduce()returns the
        final accumulator. The accumulator can be a number, string, array,
        object, or another type of value.
      </p>
      <pre>
        <CodeBlock>
          {`const getUniqueArtists = (albums) => {
    return albums.reduce((artists, album) => {
      if (!artists.includes(album.artist)) {
        return [...artists, album.artist];
      }
      return artists;
    }, []);
  };`}
        </CodeBlock>
      </pre>
      <h5>Breakdown</h5>
      <ol>
        <li>
          getUniqueArtists: A variable that stores an arrow function responsible
          for creating an array of unique artist names.
        </li>
        <li>
          albums: The function parameter that receives an array of album
          objects.
        </li>
        <li>
          First return: Returns the final result of the .reduce() method.
          Because the outer arrow function uses curly braces, an explicit return
          statement is required to return that result.
        </li>
        <li>
          Callback parameters: artists is the accumulator containing the artist
          names collected so far. album represents the current album object
          being evaluated.
        </li>
        <li>
          If statement: Checks whether the current album's artist name is
          missing from the accumulator. The ! operator negates the result of
          .includes().
        </li>
        <li>
          Second return: Creates a new array using the spread operator (...) to
          preserve the existing artist names and append album.artist. This new
          array becomes the accumulator for the next iteration.
        </li>
        <li>
          Third return: If the artist already exists in the accumulator, return
          the existing accumulator unchanged. This prevents duplicate artist
          names from being added.
        </li>
        <li>
          Initial accumulator ([]): The second argument passed to .reduce(). It
          establishes an empty array as the accumulator's starting value.
        </li>
      </ol>
      <p>
        Final result: An array of unique artist names (strings), without
        modifying the original albums array.
      </p>

      <h3>.reduce() method continued...</h3>
      <p>
        Using the .reduce() method, create a new object that contains the album
        counts by artist.
      </p>
      <pre>
        <CodeBlock>
          {`const getAlbumCountByArtist = (albums) => {
    const artistCount = albums.reduce((count, album) => {
        if (count[album.artist] === undefined) {
            count[album.artist] = 1;
      } else {
            count[album.artist]++;
      }
    return count;
    }, {});
    return artistCount;
};`}
        </CodeBlock>
      </pre>
      <h5>How it works</h5>
      <h6>1. Dynamic object keys</h6>
      <pre>
        <CodeBlock>count[album.artist]</CodeBlock>
      </pre>
      <p>
        Use bracket notation because the property name is determined dynamically
        by the current album's artist. If count.artist had been used, JavaScript
        would have looked for a property literally named "artist".
      </p>
      <h6>2. Updating the accumulator</h6>
      <pre>
        <CodeBlock>count[album.artist]++;</CodeBlock>
      </pre>
      <p>
        You're modifying the accumulator object, not the original album objects.
        This is perfectly acceptable here because the accumulator is a new
        object created specifically for this operation.
      </p>
      <h6>Optional improvement</h6>
      <p>There is a shorter way to express the if/else logic:</p>
      <pre>
        <CodeBlock>
          {`const getAlbumCountByArtist = (albums) => {
    return albums.reduce((count, album) => {
        count[album.artist] = (count[album.artist] ?? 0) + 1;
        return count;
  }, {});
};`}
        </CodeBlock>
      </pre>
      <p>
        The ?? operator is called the nullish coalescing operator. In this
        example, it uses 0 if the artist's count is undefined or null, then adds
        1.
      </p>

      <h3>.filter() method</h3>
      <p>A four branch filter operation...</p>
      <pre>
        <CodeBlock>{`const getFilteredAlbums = (albums, selectedArtist, ownedOnly) => {
    if (!ownedOnly && selectedArtist === "All") {
      return albums;
   
    } else if (ownedOnly && selectedArtist === "All") {
      return albums.filter((album) => ownedOnly === album.owned);
    
    } else if (ownedOnly && selectedArtist !== "All") {
      return albums.filter((album) => selectedArtist === album.artist && album.owned);
    
    } else if (!ownedOnly && selectedArtist !== "All") {
      return albums.filter((album) => selectedArtist === album.artist);
    }
  };`}</CodeBlock>
      </pre>
      <p>...that can be written more simply as:</p>
      <pre>
        <CodeBlock>{`const getFilteredAlbums = (albums, selectedArtist, ownedOnly) => {
  return albums.filter((album) => {
    const matchesArtist =
      selectedArtist === "All" || album.artist === selectedArtist;

    const matchesOwnership =
      !ownedOnly || album.owned;

    return matchesArtist && matchesOwnership;
  });
};`}</CodeBlock>
      </pre>
    </>
  );
}
