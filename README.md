# ac-algorithms

Welcome to Algorithm Problems. This repository will be updated every morning with a new
code challenge.

Contributing to Algorithms questions
------------------------------------

Please create a fork of this repo. Add a new file/folder for each question. Make a pull request to master and tag @yonet on your pull request. Thank you for contributing. 

Using this Repository
---------------------
You'll find each day's algorithm problem in its own folder/file.

Getting a Copy of the Repo
--------------------------
If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer. 

Submitting your Solutions
-------------------------
Once you're done, push your changes to GitHub and issue a pull request from your
repository's master branch to your annicannons branch. Ex: I will make the pull request between yonet branch on my fork to yonet branch on annicannons. 

Updating the Repository
-----------------------
Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with anniecannon's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to annicannon's version of the repo:

    git remote add upstream https://github.com/AnnieCannons/ac-algorithms.git

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.

Have fun!
