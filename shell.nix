let
  inherit
    (import (
      let
        lock = builtins.fromJSON (builtins.readFile ./flake.lock);
        name = lock.nodes.root.inputs.flake-compat;
      in
      fetchTarball {
        sha256 = lock.nodes.${name}.locked.narHash;
        url =
          lock.nodes.${name}.locked.url
            or "https://github.com/NixOS/flake-compat/archive/${lock.nodes.${name}.locked.rev}.tar.gz";
      }
    ) { src = ./.; })
    shellNix
    ;
in
shellNix
// {
  default = shellNix.shell;
}
