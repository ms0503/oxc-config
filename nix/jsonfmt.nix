{
  bash,
  fetchPypi,
  lib,
  python3Packages,
  writeScriptBin,
}:
let
  inherit (python3Packages)
    buildPythonApplication
    jmespath
    jsonpath-ng
    pygments
    pyperclip
    python
    pyyaml
    setuptools
    toml
    wheel
    ;
in
assert lib.versionAtLeast jmespath.version "0.10.0";
assert lib.versionAtLeast jsonpath-ng.version "1.5.3";
assert lib.versionAtLeast pygments.version "2.13.0";
assert lib.versionAtLeast pyperclip.version "1.8.2";
assert lib.versionAtLeast python.version "3.6";
assert lib.versionAtLeast pyyaml.version "6.0";
assert lib.versionAtLeast toml.version "0.10.2";
let
  unwrapped = buildPythonApplication rec {
    build-system = [
      setuptools
      wheel
    ];
    dependencies = [
      jmespath
      jsonpath-ng
      pygments
      pyperclip
      pyyaml
      toml
    ];
    pname = "jsonfmt";
    pyproject = true;
    src = fetchPypi {
      inherit pname version;
      hash = "sha256-2nNAQA7wFgUuP6LK6sfQfFIdoX4yWZXwhSU+6kabW00=";
    };
    version = "0.2.7";
  };
in
writeScriptBin "jf" ''
  #!${bash}/bin/bash
  set -euo pipefail
  for file in "$@"; do
    tmp=$(mktemp)
    cp "$file" "$tmp"
    "${unwrapped}/bin/jf" -O -i 4 -s "$tmp"
    if ! diff "$tmp" "$file"; then
      cp "$tmp" "$file"
    fi
    rm "$tmp"
  done
''
