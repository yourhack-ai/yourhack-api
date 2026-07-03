"""yourhack.ai tools API - tiny standard-library-only Python client.

    from yourhack import YourHack
    yh = YourHack()
    tools = yh.tools()["tools"]
    meta = yh.tool("json-formatter")
    cats = yh.categories()["categories"]
"""

import json
import urllib.request
import urllib.parse

DEFAULT_BASE = "https://yourhack.ai"


class YourHack:
    def __init__(self, base_url: str = DEFAULT_BASE):
        self.base = base_url.rstrip("/")

    def _get(self, path: str):
        req = urllib.request.Request(self.base + path, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=15) as res:
            return json.loads(res.read().decode("utf-8"))

    def tools(self):
        """All tools with metadata and canonical url."""
        return self._get("/api/tools")

    def tool(self, tool_id: str):
        """One tool by id (url slug)."""
        return self._get("/api/tools/" + urllib.parse.quote(tool_id))

    def categories(self):
        """All categories with tool counts."""
        return self._get("/api/categories")


if __name__ == "__main__":
    yh = YourHack()
    data = yh.tools()
    print(f"yourhack.ai has {data['count']} tools")
    for c in yh.categories()["categories"]:
        print(f"  {c['name']:<14}{c['toolCount']} tools  {c['url']}")
