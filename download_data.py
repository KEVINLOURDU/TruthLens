import os
import urllib.request
import sys

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
os.makedirs(DATA_DIR, exist_ok=True)

URLS = {
    "Fake.csv": "https://huggingface.co/datasets/genesisqu/fake-real-news/resolve/main/Fake.csv",
    "True.csv": "https://huggingface.co/datasets/genesisqu/fake-real-news/resolve/main/True.csv"
}

def download_file(filename, url):
    dest = os.path.join(DATA_DIR, filename)
    if os.path.exists(dest) and os.path.getsize(dest) > 1000000:
        print(f"{filename} already exists ({os.path.getsize(dest):,} bytes), skipping.")
        return
    print(f"Downloading {filename} from {url} ...")
    
    def reporthook(blocknum, blocksize, totalsize):
        readsofar = blocknum * blocksize
        if totalsize > 0:
            percent = readsofar * 1e2 / totalsize
            s = f"\r{filename}: {readsofar:,} / {totalsize:,} bytes ({percent:.1f}%)"
            sys.stdout.write(s)
            sys.stdout.flush()

    urllib.request.urlretrieve(url, dest, reporthook)
    print(f"\nSaved {filename} successfully ({os.path.getsize(dest):,} bytes)!")

if __name__ == "__main__":
    for fname, u in URLS.items():
        download_file(fname, u)
    print("All datasets downloaded successfully!")
